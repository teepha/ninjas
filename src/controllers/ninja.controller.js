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
}

export default NinjaController;
