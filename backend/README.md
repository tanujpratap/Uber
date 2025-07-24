# User Registration API Documentation

## Endpoint

**POST** `/users/register`

---

## Description

This endpoint registers a new user. It requires the user's first name, last name, email, and password. On successful registration, it returns a JWT token and the user object.

---

## Request Body

Send a JSON object with the following structure:

| Field                | Type   | Required | Description                        |
|----------------------|--------|----------|------------------------------------|
| fullname.firstname   | String | Yes      | User's first name (min 3 chars)    |
| fullname.lastname    | String | Yes      | User's last name (min 3 chars)     |
| email                | String | Yes      | User's email (must be valid email) |
| password             | String | Yes      | Password (min 6 characters)        |

**Example:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}