# Updated API Documentation

## Overview

This API provides CRUD operations for managing announcements using tRPC, Prisma, and PostgreSQL.

## Endpoints

All endpoints use the base URL: `http://localhost:3000/trpc`

### 1. createAnnouncement

- **Method**: POST
- **Endpoint**: `/createAnnouncement`
- **Input**:
  ```typescript
  {
    title: string,
    categories: string[]
  }
  ```
- **Description**: Creates a new announcement
- **Response**: Returns the created announcement object

### 2. getAnnouncementById

- **Method**: GET
- **Endpoint**: `/getAnnouncementById`
- **Input**:
  ```typescript
  {
    id: number
  }
  ```
- **Description**: Retrieves a single announcement by its ID
- **Response**: Returns the announcement object or throws an error if not found

### 3. getAnnouncements

- **Method**: GET
- **Endpoint**: `/getAnnouncements`
- **Input**:
  ```typescript
  {
    page?: number (default: 1),
    limit?: number (default: 10)
  }
  ```
- **Description**: Retrieves a paginated list of announcements
- **Response**: Returns an array of announcement objects

### 4. getAnnouncementsCount

- **Method**: GET
- **Endpoint**: `/getAnnouncementsCount`
- **Input**: None
- **Description**: Retrieves the total count of announcements
- **Response**: Returns a number representing the total count of announcements

### 5. updateAnnouncement

- **Method**: POST
- **Endpoint**: `/updateAnnouncement`
- **Input**:
  ```typescript
  {
    id: number,
    title?: string,
    categories?: string[]
  }
  ```
- **Description**: Updates an existing announcement
- **Response**: Returns the updated announcement object

## Error Handling

- All endpoints may throw errors for invalid inputs or server issues
- Specific errors (e.g., "Announcement not found") are thrown for certain conditions

## Data Model

```typescript
Announcement {
  id: number
  title: string
  categories: string[]
  publicationDate: Date
  lastUpdated: Date
}
```
