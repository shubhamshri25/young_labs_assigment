const getGreeting = async (req, res) => {
  try {
    const name = req.query.name;
    if (!name) {
      return res.status(400).json({ error: "Name is required." });
    }
    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getGreeting };
