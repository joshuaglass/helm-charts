db.getSiblingDB("$external").runCommand(
  {
    createUser: "CN=user",
    roles: [
      { role: "readWriteAnyDatabase", db: "admin" }
    ]
  }
)
