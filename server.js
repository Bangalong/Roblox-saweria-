const express = require("express")

const app = express()

app.use(express.json())

let latestDonation = {
	name: "Belum Ada",
	amount: 0
}

app.post("/webhook", (req, res) => {

	console.log(req.body)

	const data = req.body

	if (data && data.data) {

		latestDonation.name =
			data.data.donator_name

		latestDonation.amount =
			data.data.amount

		console.log("DONASI MASUK")
	}

	res.sendStatus(200)
})

app.get("/donation", (req, res) => {

	res.json(latestDonation)
})

app.listen(3000, () => {
	console.log("SERVER HIDUP")
})
