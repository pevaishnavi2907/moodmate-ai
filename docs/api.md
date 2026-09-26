# MoodMate AI API Documentation

## Base URLs

* Frontend: http://localhost:5173
* Backend: http://localhost:5000
* AI Service: http://localhost:8000

---

## 1. Authentication

### POST /api/auth/register

Register a new user.

Request:

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "password123"
}
```

### POST /api/auth/login

Login an existing user.

Request:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

## 2. Mood APIs

### POST /api/moods

Save a user's mood.

Request:

```json
{
  "mood": "happy",
  "intensity": 8,
  "source": "text"
}
```

Valid sources:

* `text`
* `emoji`
* `face`

### GET /api/moods

Get the user's mood history.

### GET /api/moods/:id

Get a specific mood entry.

### DELETE /api/moods/:id

Delete a mood entry.

---

## 3. Recommendation API

### GET /api/recommendations

Get recommendations based on the user's current mood.

---

## 4. AI API

### POST /analyze-mood

Analyze mood from text.

Request:

```json
{
  "text": "I am feeling really happy today!"
}
```

Response:

```json
{
  "mood": "happy",
  "intensity": 8,
  "confidence": 0.87
}
```
