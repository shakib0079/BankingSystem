# Banking System Console Application

This is a console-based Banking System application built using core JavaScript. The application provides an interactive, text-based interface, allowing an admin to manage user accounts, perform transactions, and view transaction history. Input is taken directly from the console using the `prompt-sync` library.

## Features

### Completed Features
- **Account Management**:
  - **Create New Account**: Admins can create a new account with user details such as name and initial balance.
  - **Show All Users**: Displays a list of all registered users, including basic account information.
  - **Show Specific User**: Retrieve detailed information for a specific user by their unique ID.
  - **Update User Information**: Modify user details, such as updating their name or contact information.
  - **Delete User**: Admins can delete a user's account, removing them from the system.

- **Transaction Management**:
  - **Check Balance**: View the balance of a specific user.
  - **Transaction History**: View a list of past transactions for each user, including deposits, withdrawals, and transfers.

### Upcoming Features (In Development)
- **Login System**:
  - Implementing a **Login System** to distinguish between **Admin** and **User** roles. 
  - **Role-based Access**:
    - **Admin**: Full access to all account and transaction management features.
    - **User**: Limited access to personal account details and transaction history.
  - **User Authentication**: Users will need to log in with credentials to access the system.
  
This feature is currently under development and will enhance the security and user experience of the application.

## Technologies Used
- **JavaScript (Core)**: Used for implementing application logic.
- **prompt-sync**: For handling console input in a synchronous manner.

## Getting Started

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/BankingSystem.git
   cd BankingSystem
