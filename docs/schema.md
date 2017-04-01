# DB Schema

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null

## Sessions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references Users), indexed
session_token   | string    | not null, indexed, unique

## Lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references Users), indexed
title       | string    | not null

## Tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
list_id     | integer   | not null, foreign key (references Lists), indexed
title       | string    | not null
resolved    | boolean   | not null, default: false