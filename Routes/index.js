const Guest = require("../Models/index");

const allRoutes = (app) => {
  app.get("/get_all_guests", async (req, res) => {
    try {
      const allGuests = await Guest.find();
      res.send(allGuests).status(200);
    } catch (err) {
res.send(err).status(500)   }
  });
  app.post("/add_guest", async (req, res) => {
    const { name, surname, food, time, attendence } = req.body;
    try {
      let guest = new Guest({
        name,
        surname,
        food,
        time,
        attendence,
      });

      if ((name || surname || food || time || attendence) !== "") {
        const guestSaved = await guest.save();
        res.send({ message: "User succesfully saved", userSaved }).status(200);
      } else {
        res.send({ message: "Fill all the fields" }).status(201);
      }
    } catch (error) {
      res.send(error).status(500);
    }
  });

  app.delete("/delete_guest/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteGuest = await Guest.deleteOne({ _id: id });
      res
        .send({ message: "Guest succesfully deleted", deleteGuest })
        .status(200);
    } catch (err) {
      res.sendStatus(501);
    }
  });

  app.put("/edit_guest/:id", async (req, res) => {
    const { id } = req.params;
    const { name, surname, food, time, attendence } = req.body;
    try {
      const updateGuest = {
        name,
        surname,
        food,
        time,
        attendence,
      };
      const findGuest = await Guest.findOneAndUpdate(
        { _id: `${id}` },
        updateGuest
      );

      if (!findGuest) {
        res.send({ message: "Guest not found..." });
      } else {
        res.send(findGuest).status(200);
      }
    } catch (err) {
        res.send(err)
    }
  });
};

module.exports = { allRoutes };
