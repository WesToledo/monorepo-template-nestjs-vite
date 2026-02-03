# Backend API

## Authentication

### POST /auth/register

Registers a new user.

**Payload:**

```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe" // Optional
}
```

**Response:**

Returns the created user object (excluding the password).

### POST /auth/login

Logs in a user and returns a JWT access token.

**Payload:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### GET /auth/profile

Returns the profile of the authenticated user.

**Headers:**

`Authorization: Bearer <access_token>`

**Response:**

```json
{
  "userId": 1,
  "email": "user@example.com"
}
```

## Other Routes

### GET /

Returns a greeting message.
