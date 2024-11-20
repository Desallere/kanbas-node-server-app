const module = {
    id: 1,
    name: "NodeJS",
    description: "Create a NodeJS server with ExpressJS",
    course: "CS5610",
  };
  export default function WorkingWithModules(app) {
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
      res.json(module.name);
    });
  
    app.get("/lab5/module/name/:newName", (req, res) => {
      const { newName } = req.params;
      module.name = newName;
      res.json(module);
    });
    app.get("/lab5/module/name/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        module.description = newDescription;
        res.json(module);
      });
  }
  