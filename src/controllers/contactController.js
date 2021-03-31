const controller = {}

controller.getAll = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT *FROM contact", (err, contacts) => {
            res.render("contacts", {
                data: contacts
            });
        });
    });     
}


controller.create = (req, res) => {
    const {name, number} = req.body;
    req.getConnection((err, conn) => {
        conn.query("INSERT INTO contact (name, number) VALUES (?, ?)", [name, number], (err, customer) => {
            res.redirect("/");
        });
    });
}


controller.edit = (req, res) => {
    const id = req.params.id;
    
    req.getConnection((err, conn) => {
        conn.query("SELECT *FROM contact WHERE id = ?", [id], (err, contact) => {
            res.render("edit_contact", {
                data: contact[0]
            });
        });
    });
}


controller.update = (req, res) => {
    const id = req.params.id;
    const newContact = req.body;

    req.getConnection((err, conn) => {
        conn.query("UPDATE contact SET ? WHERE id = ?", [newContact, id], (err, contact) => {
            res.redirect("/");
        });
    });
}


controller.delete = (req, res) => {
    const id = req.params.id;

    req.getConnection((err, conn) => {
        conn.query("DELETE FROM contact WHERE id = ?", [id], (err, contact) => {
            res.redirect("/");
        });
    });
}

module.exports = controller;