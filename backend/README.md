# API Documentation

## Overview

This API provides operations for managing announcements using tRPC, Prisma, and PostgreSQL.

## Data Model

```typescript
Announcement {
  id: number;
  title: string;
  content?: string;
  categories: string[];
  publicationDate: DateTime;
  lastUpdated: DateTime;
}
```

## Endpoints

### 1. Get Announcement by ID

Retrieves a single announcement by its ID

- **Method**: Query
- **Procedure**: `getById`
- **Input**:

```typescript
{
  id: number
}
```

- **Response**: Returns the announcement object
- **Error**: Throws `NOT_FOUND` error if announcement doesn't exist

### 2. List Announcements

Retrieves a paginated list of announcements, ordered by lastUpdated in descending order

- **Method**: Query
- **Procedure**: `list`
- **Input**:

```typescript
{
  page: number // defaults to 1
  limit: number // defaults to 10
}
```

- **Response**: Returns an array of announcement objects

### 3. Count Announcements

Gets the total count of announcements

- **Method**: Query
- **Procedure**: `count`
- **Response**:

```typescript
{
  count: number
}
```

### 4. Update Announcement

Updates an existing announcement

- **Method**: Mutation
- **Procedure**: `update`
- **Input**: Announcement object with the following schema:

```typescript
{
  id: number;
  title: string;
  content?: string;
  categories: string[];
  publicationDate: string;
  lastUpdated?: Date;
}
```

- **Response**: Returns the updated announcement object
