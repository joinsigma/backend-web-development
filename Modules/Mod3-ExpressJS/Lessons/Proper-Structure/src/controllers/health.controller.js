class HealthController {
  getHealthData = (req, res) => {
    res.json({
      name: "carsome-clone",
      version: "v1.0",
      timestamp: new Date().toISOString(),
    });
  };
}

export default new HealthController();
