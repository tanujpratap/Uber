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

# User Login API Documentation

## Endpoint

**POST** `/users/login`

---

## Description

This endpoint authenticates an existing user. It requires the user's email and password. On successful login, it returns a JWT token and the user object.

---

## Request Body

Send a JSON object with the following structure:

| Field    | Type   | Required | Description                        |
|----------|--------|----------|------------------------------------|
| email    | String | Yes      | User's email (must be valid email) |
| password | String | Yes      | Password (min 6 characters)        |

**Example:**
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}

# User Logout API Documentation

# User Profile API Documentation

## Endpoint

**GET** `/users/profile`

---

## Description

This endpoint retrieves the authenticated user's profile information. The user must be authenticated to access this endpoint.

---

## Request

- No request body required.
- The request must include a valid authentication token (JWT) in cookies or the `Authorization` header.

---

## Responses

| Status Code | Description                        | Example Response Body                      |
|-------------|------------------------------------|--------------------------------------------|
| 200         | Profile retrieved successfully     | `{ "fullname": { "firstname": "John", "lastname": "Doe" }, "email": "john.doe@example.com", ... }` |
| 401         | Unauthorized (no/invalid token)    | `{ "message": "Unauthorized" }`            |
| 500         | Internal server error              | `{ "message": "Internal server error" }`   |

---

## Notes

- User must be authenticated to access this endpoint.
- Returns the user's profile data.

## Endpoint

**GET** `/users/logout`

---

## Description

This endpoint logs out the authenticated user by clearing the authentication token and blacklisting it. The user must be authenticated to access this endpoint.

---

## Request

- No request body required.
- The request must include a valid authentication token (JWT) in cookies or the `Authorization` header.

---

## Responses

| Status Code | Description                   | Example Response Body                      |
|-------------|-------------------------------|--------------------------------------------|
| 200         | User logged out successfully  | `{ "message": "Logged Out" }`              |
| 401         | Unauthorized (no/invalid token) | `{ "message": "Unauthorized" }`           |
| 500         | Internal server error         | `{ "message": "Internal server error" }`   |

---

## Notes

- The endpoint clears the authentication token from cookies.
- The token is blacklisted to prevent further use.
- User must be authenticated to access this endpoint.


# Captain Registration API Documentation

## Endpoint

**POST** `/captains/register`

---

## Description

This endpoint registers a new captain (driver). It requires the captain's full name, email, password, and vehicle details. On successful registration, it returns a JWT token and the captain object.

---

## Request Body

Send a JSON object with the following structure:

| Field                   | Type   | Required | Description                                 |
|-------------------------|--------|----------|---------------------------------------------|
| fullname.firstname      | String | Yes      | Captain's first name (min 3 chars)          |
| fullname.lastname       | String | Yes      | Captain's last name (min 3 chars)           |
| email                   | String | Yes      | Captain's email (must be valid email)       |
| password                | String | Yes      | Password (min 6 characters)                 |
| vehicle.color           | String | Yes      | Vehicle color (min 3 chars)                 |
| vehicle.plate           | String | Yes      | Vehicle plate (min 3 chars)                 |
| vehicle.vehicleType     | String | Yes      | Vehicle type: 'car', 'auto', or 'bike'      |
| vehicle.capacity        | Number | Yes      | Vehicle capacity (min 1)                    |

**Example:**
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ1234",
    "vehicleType": "car",
    "capacity": 4
  }
}

# Captain Login API Documentation

## Endpoint

**POST** `/captains/login`

---

## Description

This endpoint authenticates an existing captain (driver). It requires the captain's email and password. On successful login, it returns a JWT token and the captain object.

---

## Request Body

Send a JSON object with the following structure:

| Field    | Type   | Required | Description                        |
|----------|--------|----------|------------------------------------|
| email    | String | Yes      | Captain's email (must be valid)    |
| password | String | Yes      | Password (min 6 characters)        |

**Example:**
```json
{
  "email": "jane.smith@example.com",
  "password": "securePassword123"
}

# Captain Profile API Documentation

## Endpoint

**GET** `/captains/profile`

---

## Description

This endpoint retrieves the authenticated captain's profile information including personal details and vehicle information.

---

## Request 

### Headers Required
```json
{
  "Authorization": "Bearer <token>"
}


# Captain Logout API Documentation

## Endpoint

**GET** `/captains/logout`

---

## Description

This endpoint logs out the authenticated captain by clearing the authentication token from cookies and blacklisting it to prevent reuse.

---

## Request 

### Headers Required
```json
{
  "Authorization": "Bearer <token>"
}