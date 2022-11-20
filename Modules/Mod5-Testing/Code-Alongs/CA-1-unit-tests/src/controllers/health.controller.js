class HealthController {
  getHealthCheck(req, res, next) {
    try {
      return res.status(200).json({
        name: "carsome-clone-api",
        version: "V1",
        date: Date.now(),
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new HealthController();
