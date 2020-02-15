import Ninja from "../db/models/ninja.model";

class NinjaController {
  static async create(req, res, next) {
    try {
      const foundNinja = await Ninja.findOne({ name: req.body.name });
      if (foundNinja) {
        res.status(400).json({ error: "Ninja already exist!" });
      }
      const ninja = await Ninja.create(req.body);
      res.status(201).json({
        message: "Ninja created successfully!",
        ninja
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const ninja = await Ninja.findByIdAndRemove({ _id: req.params.id });
      res.json({
        message: "Ninja deleted successfully!",
        ninja
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      await Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body);
      const ninja = await Ninja.findOne({ _id: req.params.id });
      res.json({
        message: "Ninja updated successfully!",
        ninja
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const { lng, lat } = req.query;
      const point = {
        type: "Point",
        coordinates: [parseFloat(lng), parseFloat(lat)]
      };
      const ninjas = await Ninja.aggregate([
        {
          $geoNear: {
            near: point,
            distanceField: "distance",
            maxDistance: 100000,
            spherical: true
          }
        }
      ]);
      res.json(ninjas);
    } catch (error) {
      next(error);
    }
  }

  static async getOne(req, res, next) {
    try {
      const ninja = await Ninja.findById(req.params.id);
      res.json(ninja);
    } catch (error) {
      next(error);
    }
  }

  static async getAvailable(req, res, next) {
    try {
      const ninjas = await Ninja.find({ available: true });
      res.json(ninjas);
    } catch (error) {
      next(error);
    }
  }
}

export default NinjaController;
