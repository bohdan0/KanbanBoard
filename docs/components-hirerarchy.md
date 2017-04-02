# Component Hierarchy

### App
- AuthForm
- HomeContainer

### HomeContainer
- Home

### Home
- Header
- ListIndexContainer

### ListIndexContainer
- ListIndex

### ListIndex
- ListItem
- NewList

### ListItem
- TaskIndexContainer

### TaskIndexContainer
- TaskIndex

### TaskIndex
- TaskItem
- NewTask

# Routes

| Path        | Component       |
|-------------|-----------------|
| "/"         | "App"           |
| "/sign-up"  | "AuthForm"      |
| "/sign-in"  | "AuthForm"      |
| "/home"     | "HomeContainer" |