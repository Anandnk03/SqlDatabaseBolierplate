const sequelize = require('../config/dbConfig').sequelize;

async function getMethod(req, res) {
  const { id } = req.params;
  try {
    const [result] = await sequelize.query(
      `SELECT * FROM E2M_MACHINE_M where id = ${id}`
    );
    res.status(200).json(result);
    console.log(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getMethod };
