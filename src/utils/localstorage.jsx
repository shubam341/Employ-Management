const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Prepare Report",
          "description": "Complete the financial report for Q1.",
          "date": "2025-02-10",
          "category": "Finance",
          "active": true,
          "newtask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Team Meeting",
          "description": "Attend the weekly team sync-up.",
          "date": "2025-02-12",
          "category": "Meetings",
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Client Call",
          "description": "Discuss project requirements with the client.",
          "date": "2025-02-11",
          "category": "Client Relations",
          "active": true,
          "newtask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Bug Fixing",
          "description": "Resolve UI glitches in the dashboard.",
          "date": "2025-02-13",
          "category": "Development",
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Code Review",
          "description": "Review pull requests from the development team.",
          "date": "2025-02-14",
          "category": "Development",
          "active": false,
          "newtask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Marketing Campaign",
          "description": "Prepare a social media marketing plan.",
          "date": "2025-02-15",
          "category": "Marketing",
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "SEO Optimization",
          "description": "Improve search engine ranking for the website.",
          "date": "2025-02-16",
          "category": "SEO",
          "active": false,
          "newtask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Inventory Check",
          "description": "Verify stock levels in the warehouse.",
          "date": "2025-02-17",
          "category": "Logistics",
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Supplier Meeting",
          "description": "Negotiate contracts with new suppliers.",
          "date": "2025-02-18",
          "category": "Supply Chain",
          "active": true,
          "newtask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Budget Planning",
          "description": "Prepare next quarter’s budget proposal.",
          "date": "2025-02-19",
          "category": "Finance",
          "active": false,
          "newtask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Customer Support Training",
          "description": "Conduct a session on handling customer complaints.",
          "date": "2025-02-20",
          "category": "Customer Support",
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Product Testing",
          "description": "Test the latest software update before release.",
          "date": "2025-02-21",
          "category": "Quality Assurance",
          "active": true,
          "newtask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
   export const setLocalStorage =() =>{
     localStorage.setItem('employees',JSON.stringify(employees))
   }

   export const getLocalStorage =() =>{
    
   }

   
  export { employees, admin };
  