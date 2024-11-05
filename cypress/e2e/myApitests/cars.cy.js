describe("Cars", () => {
	let sid;
	let carId;
	beforeEach(() => {
		cy.visit("https://qauto.forstudy.space/", {
			auth: {
				username: "guest",
				password: "welcome2qauto",
			},
		});
		const userCreds = {
			email: "marynatest@test.com",
			password: "Qwerty12345",
			remember: true,
		};
		cy.request(
			"POST",
			"https://qauto.forstudy.space/api/auth/signin",
			userCreds
		).then((response) => {
			const headers = response.headers;
			const cookie = headers["set-cookie"][1];
			const cookieArray = cookie.split("\n");
			for (const cookie of cookieArray) {
				if (cookie.trim().startsWith("sid=")) {
					sid = cookie.trim().split("=")[1].split(";")[0];
					break;
				}
			}
		});
	});

	it("Get Cars", () => {
		cy.request("GET", "https://qauto.forstudy.space/api/cars/models", {
			headers: {
				Cookie: `sid=${sid}`,
			},
		}).then((response) => {
			cy.log(JSON.stringify(response.body));
			expect(response.status).to.equal(200);
			response.body.data.forEach((item) => {
				expect(item).to.have.property("id");
			});
		});
	});
	it("Post Car", () => {
		const car = {
			carBrandId: 1,
			carModelId: 1,
			mileage: 100500,
		};
		cy.request({
			method: "POST",
			url: "https://qauto.forstudy.space/api/cars",
			body: car,
			headers: {
				Cookie: `sid=${sid}`,
			},
		}).then((response) => {
			cy.log(JSON.stringify(response.body));
			expect(response.status).to.equal(201);
			expect(response.body.data.mileage).to.equal(car.mileage);
			carId = response.body.data.id;
		});
	});

	it("Delete Car", () => {
		cy.request({
			method: "DELETE",
			url: `https://qauto.forstudy.space/api/cars/${carId}`,
			headers: {
				Cookie: `sid=${sid}`,
			},
		}).then((response) => {
			cy.log(JSON.stringify(response.body));
			expect(response.status).to.equal(200);
			expect(response.body.data.carId).to.equal(carId);
		});
	});
});
