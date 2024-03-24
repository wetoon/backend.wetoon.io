import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { Collection, InitializeFirebase } from "@app/lib/database";

InitializeFirebase({
	databaseURL: "https://web-application-5963b-default-rtdb.asia-southeast1.firebasedatabase.app",
	project_id: "web-application-5963b",
	private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCWeziA5w6gD+ka\n3wnn4bPVcAHjrPWzdS8ZXA9ryoY3H0c4dpWi73bMpx+bdBi9OlNKt0I4x19Zl/7r\nRXMYyC1Ve+Q0TinNIcGYiKlx9hwcVeobjHU+2bchBAkgeSwA3mf8v4gclYEjTmfn\n21V73y5a6jT6IbwOocLDhSmHkk6IJqzACJKygS0P+upOUdjN5NWwOfQwvnl9bcvK\nAs0+jQ9qSSOT+8mtn7/aiD0LMGI5NEY82bpU6QGJ04I6HWCI24EylzqwUn1JynaY\nkL5e5FYVLD/7B+S5dj65J9H7afzqnTnZxXNauv2ovmBRTwjQtwMuv6rg0WjP21NB\nxZe6bWIxAgMBAAECggEAEGgKUsl+R3a8njyjhpfNxM9DsXg9yI1V74ChQMoRpIhh\nOjd5nIxZqjntYQRBHz5w7tQ4oNqh23GOLkYB5LmMccXCbW55Mb+ErTX3LXDdAzzd\nu5euf8X6aJvZR+RWJxkYgs66Dw3AyOHnQ7je4tTEJ87hrETJzVmXE7ycuMZ7j+3m\ntaVC+SHzTFM7MhW/IS5LZrsrn6yBKg6Rr/mHC+LEv77zDSvRc1Jd88bGabmA2Wmc\nABk6OdUHcSkmRrzLVZ86pv8NJSiYzUgBdssv979eK3Dvlk+x083f6UKnnlgBHpLZ\nU+k7tM0vlN5882/uvfTGy39dKH38YkL9gKmXDt1zEQKBgQDKZ3EC/0yI3lhADPY+\nXs5mgUIugx1aOwVXkM5q4K5HswQYaWijo2/PFvwOqWB/oLrs0Hwm6g5C2VOBtoa8\nc9GvKpc8+RiALFB4FJAZrd0HV/iFHoGLFGTwpaUxrTlNURGnDh0ySLVyauEdds5c\nZBPAXpp+1c0Uzo0vQDHozPKxaQKBgQC+VAr8ZaG9eDl24CZK3xtJO1NxfO897Qxk\n58lo+JmeSgzGKEJ1p078DbHGn8woCITDflxmWkQUDUOtyo1eLQFIlkQBZgOBNVhK\nB8N1KLfFuw68i6IMmMMsoD2CZedmrZVJTZE/l1wCkJj9BwXpU7Wxx8zwpTcnlBaN\nkWDRTBnJiQKBgBX+28cpm1WcZBbB0djBUMjO7zRCx2PQ2inD8MqolAfyqlVEzzxJ\nPJNSuh2VxojYHLgzh+pqsRYOrAaCoW3FYFoa1MipgUIcjrod8fL4c/aiVr2QrR9C\nHh4Qwjz9yCZg0vxGimG2iRFgEAq1qINd1M+o+D0kWt8R+0HRRhs4en9RAoGBALp1\nAz45IrbHrSQ0e88lu0mHATxRNN/p9xZzrPFVesmDqfgHQPSaL9rmX59CtXMSxV3v\n0P3EuKUcSY1cvhng5T0DWSQ1mIFgjVoZOPbyKPdhRhKYiOzmS27QnPG+e3Av5eym\nPQGbetxYZEieNMBc7cd5AeFPOjVf8qhGIB9q+mhhAoGAZFZGp6Xf3yCxWbm1ZktO\nnrV5huTK7FJAwDHUcyD+B05FRxpq7n9u6y1khvX1nelUrlXm3rYU3FLlRaRzpSRi\ncoVibHp/VabHbQec1XSUrJIZ3NYj/eBJbjKMoimgTBh+IinZMozWyrfX7gCVmRvU\nN9As1fvcAkrspw4g6NrsYFc=\n-----END PRIVATE KEY-----\n",
	client_email: "firebase-adminsdk-jas7p@web-application-5963b.iam.gserviceaccount.com"
})

const member = new Collection("member");

new Elysia().use( cors() )

.get("/", async () => {
	const metadata = await member.findAll();
	return metadata
})

.listen( 3000 );




