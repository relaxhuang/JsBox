$ssh.connect({
  host: "",
  port: 22,
  username: "",
  password: "",
  script: "ssh 192.168.1.83 ls -l && ssh 192.168.1.84 ls -l",
  handler: function(session, response) {
    console.log("connect: " + session.connected)
    console.log("authorized: " + session.authorized)
    console.log("response: " + response)
    console.log("port: " + session.port)
  }
})
