import { InitializeApplication , Collection } from "@app/lib/firebase";
import utils from "@app/lib/utils";
import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import jwt from "jsonwebtoken";

InitializeApplication("https://web-application-5963b-default-rtdb.asia-southeast1.firebasedatabase.app", {
	project_id: "web-application-5963b",
	private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCWeziA5w6gD+ka\n3wnn4bPVcAHjrPWzdS8ZXA9ryoY3H0c4dpWi73bMpx+bdBi9OlNKt0I4x19Zl/7r\nRXMYyC1Ve+Q0TinNIcGYiKlx9hwcVeobjHU+2bchBAkgeSwA3mf8v4gclYEjTmfn\n21V73y5a6jT6IbwOocLDhSmHkk6IJqzACJKygS0P+upOUdjN5NWwOfQwvnl9bcvK\nAs0+jQ9qSSOT+8mtn7/aiD0LMGI5NEY82bpU6QGJ04I6HWCI24EylzqwUn1JynaY\nkL5e5FYVLD/7B+S5dj65J9H7afzqnTnZxXNauv2ovmBRTwjQtwMuv6rg0WjP21NB\nxZe6bWIxAgMBAAECggEAEGgKUsl+R3a8njyjhpfNxM9DsXg9yI1V74ChQMoRpIhh\nOjd5nIxZqjntYQRBHz5w7tQ4oNqh23GOLkYB5LmMccXCbW55Mb+ErTX3LXDdAzzd\nu5euf8X6aJvZR+RWJxkYgs66Dw3AyOHnQ7je4tTEJ87hrETJzVmXE7ycuMZ7j+3m\ntaVC+SHzTFM7MhW/IS5LZrsrn6yBKg6Rr/mHC+LEv77zDSvRc1Jd88bGabmA2Wmc\nABk6OdUHcSkmRrzLVZ86pv8NJSiYzUgBdssv979eK3Dvlk+x083f6UKnnlgBHpLZ\nU+k7tM0vlN5882/uvfTGy39dKH38YkL9gKmXDt1zEQKBgQDKZ3EC/0yI3lhADPY+\nXs5mgUIugx1aOwVXkM5q4K5HswQYaWijo2/PFvwOqWB/oLrs0Hwm6g5C2VOBtoa8\nc9GvKpc8+RiALFB4FJAZrd0HV/iFHoGLFGTwpaUxrTlNURGnDh0ySLVyauEdds5c\nZBPAXpp+1c0Uzo0vQDHozPKxaQKBgQC+VAr8ZaG9eDl24CZK3xtJO1NxfO897Qxk\n58lo+JmeSgzGKEJ1p078DbHGn8woCITDflxmWkQUDUOtyo1eLQFIlkQBZgOBNVhK\nB8N1KLfFuw68i6IMmMMsoD2CZedmrZVJTZE/l1wCkJj9BwXpU7Wxx8zwpTcnlBaN\nkWDRTBnJiQKBgBX+28cpm1WcZBbB0djBUMjO7zRCx2PQ2inD8MqolAfyqlVEzzxJ\nPJNSuh2VxojYHLgzh+pqsRYOrAaCoW3FYFoa1MipgUIcjrod8fL4c/aiVr2QrR9C\nHh4Qwjz9yCZg0vxGimG2iRFgEAq1qINd1M+o+D0kWt8R+0HRRhs4en9RAoGBALp1\nAz45IrbHrSQ0e88lu0mHATxRNN/p9xZzrPFVesmDqfgHQPSaL9rmX59CtXMSxV3v\n0P3EuKUcSY1cvhng5T0DWSQ1mIFgjVoZOPbyKPdhRhKYiOzmS27QnPG+e3Av5eym\nPQGbetxYZEieNMBc7cd5AeFPOjVf8qhGIB9q+mhhAoGAZFZGp6Xf3yCxWbm1ZktO\nnrV5huTK7FJAwDHUcyD+B05FRxpq7n9u6y1khvX1nelUrlXm3rYU3FLlRaRzpSRi\ncoVibHp/VabHbQec1XSUrJIZ3NYj/eBJbjKMoimgTBh+IinZMozWyrfX7gCVmRvU\nN9As1fvcAkrspw4g6NrsYFc=\n-----END PRIVATE KEY-----\n",
	client_email: "firebase-adminsdk-jas7p@web-application-5963b.iam.gserviceaccount.com"
});

const secure : string = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAoMhf56uA45jaj1Zt1Cx9gygxFJ5VVTY+dl8IJjCAx4NYbMRR
g3+OrJ3SaI6aQ9e1WNOPVALTd6+MApJ6uaaWo8DfL8Givep8fwRngBipXcqqtOZ5
1/QfZ4VrHUejZdny0dSFaTx6NywnsMG/7/OdYf9NRJpfz5TItsCG/Wmlf0Lj5YDX
BvpzkN57JOtSlWmG+ny65Iu8gpgfkTiN2/m1yk36+XMy23n07fkOSJ1GdwJL1bWV
9cwhJFt5SOQnxlr05ZjiIPKL7r9e0STPIou+B+KzHGPZOvidKHWyW8/I5y5KMD35
xi+Tt514s9lZVEOjW/78j3fQyP8pBfD/rDQLaQIDAQABAoIBAATM2q0nXgidgYf2
Qf7ryZ8C8g0uKXjK7uw4i90dBVk/iwIrTc413pf5ecTQnhswq1vArDarQ24/NdhF
UIfuqPBwY5Fwz+eo4qjlpCPrSJIx6O0P9PsNMStVbMRh5UdXDZR1anrA+Rqg1ToG
HNGAhdY9Saymyb3AMMpg/t69utjM5bTn37yVrvJpFkTb+/+mfWGIo9JIyMuwbieZ
2eibrnKwPwF3C29C/YI2pAM2PRHNqoGf98LP8eTDSnTZpy68RYk4aleYSKfen/dM
uqVOKDGb7mJ/NjYtzUVpPbNtAmPMP5r3NeJ7Mm+onYAGwnV1G2b8hOZ2dz6y+J3/
328k51ECgYEAy6J5vtwF5SvScx+r9pSKonnN1daLLksSPSKi7nRxFlZFIZn25aaF
ye2TzyF6d+38IMznMc7l+9UmVbxO+2LwDePo5OZA0Pfug3vXfETSfwbYPDrNEMCY
GlDkw6ccVxyjlkbSGj5DzQn8SnAT3B5I3eiURZiI7hTmX/2iICuxy/kCgYEAyiDm
ueed/JjBj7CP/YE1HETjP6trKUuopG1fmhP/nL0ySGj7JTZWYA/t5K6A7IY2hWez
E9SChMsrGeGlPuqciTrWTM9TWOn9YR/csjFvty0d5QG6zTPWYsqtU23O/lou7tN7
KwP17ULw9FnAOY5JSst25b3KgH0ExlqnwM1QtvECgYAAsJY0/U3Pzuwxk6Pje/FU
R5FY7hcemwZ+yoU+xYo0hypIyNq7QGsnmfRsOTLPATFfcxI9avQAfGJa2/5wf49M
nL8HN3h0vMJEE8FRHHKSF5XX7mMPcXeSbz+3IfPIn8I2GhtQF3HnWedO4T5P+pJI
nicSbUfZdpypKpTIAx3hEQKBgQDDYvCFrl5qyWL6OivGWrrzO6gMaPCqt4cqgsuS
Tlids8nCczCqdQ8jxuIoV4MqoEZdyLMzrQ4JvbdJSnUJD5MHmIeFMjiYT3/t/fXB
jsY15HfsYjKnn79SOic36YLZHmYV2PpLx4VXt4jiO0v0lxVEJtAlHsR8Vd1ivElC
t3WZkQKBgFIr44flkNuomDJmhkoYd6zAwZ1IJnBMqUbIwVNQKKeUqMGBYqqQEnNk
DNHKj5VLXJMREJkV+IgcrleVbzOZDIrtM7Cudcoutf8Jg/MyqeT21Rm57KKAoTHI
GlZiqBY61eajwDRBsUfLA62CheitP+5iCks92/o6yQIEWIpJ06fM
-----END RSA PRIVATE KEY-----`

interface AnyObject {
	[ key:string ]: any
}

new Elysia().use( cors({ origin:"https://wetoon.github.io" }) )

.group('/auth', ( route ) => {
	const collection = new Collection("member");
	return route
		.post('/login', async ( { body } : { body: AnyObject } ) => {
			const { username, password } = body;
			if ( typeof username !== "string" || typeof password !== "string" ) {
				return { code:404 , message:"This route cloud not be found." }
			}
			const user = await collection.find({ username });
			if ( user && utils._Compare( password, user.password as string ) ) {
				const token = jwt.sign({
					id: user.__id, username, role:[ username ]
				}, secure, { algorithm:"RS256" , expiresIn:"30d" });
				return { code:200 , token }
			} else {
				return { code:400 , message:"Invalid username or password." }
			}
		})
		.post('/register', () => 'Sign up')
		.post('/:username', () => 'Profile')
})

.listen( 3000 );
