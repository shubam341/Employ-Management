

const employees = [
  {
    "id": 1,
    "name": "Aarav Sharma",
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
        "completed": true,
        "failed": false,
        "taskCount": { "active": 1, "newtask": 0, "completed": 1, "failed": 0 }
      },
      {
        "title": "Team Meeting",
        "description": "Attend the weekly team sync-up.",
        "date": "2025-02-12",
        "category": "Meetings",
        "active": true,
        "newtask": true,
        "completed": true,
        "failed": false,
        "taskCount": { "active": 1, "newtask": 1, "completed": 1, "failed": 0 }
      }
    ]
  },
  {
    "id": 2,
    "name": "Ishaan Verma",
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
        "failed": false,
        "taskCount": { "active": 1, "newtask": 2, "completed": 1, "failed": 0 }
      },
      {
        "title": "Bug Fixing",
        "description": "Resolve UI glitches in the dashboard.",
        "date": "2025-02-13",
        "category": "Development",
        "active": true,
        "newtask": true,
        "completed": false,
        "failed": false,
        "taskCount": { "active": 1, "newtask": 1, "completed": 0, "failed": 0 }
      },
      {
        "title": "Code Review",
        "description": "Review pull requests from the development team.",
        "date": "2025-02-14",
        "category": "Development",
        "active": false,
        "newtask": false,
        "completed": false,
        "failed": true,
        "taskCount": { "active": 0, "newtask": 0, "completed": 0, "failed": 1 }
      }
    ]
  },
  {
    "id": 3,
    "name": "Neha Kapoor",
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
        "failed": false,
        "taskCount": { "active": 1, "newtask": 1, "completed": 0, "failed": 0 }
      },
      {
        "title": "SEO Optimization",
        "description": "Improve search engine ranking for the website.",
        "date": "2025-02-16",
        "category": "SEO",
        "active": false,
        "newtask": false,
        "completed": false,
        "failed": true,
        "taskCount": { "active": 0, "newtask": 0, "completed": 0, "failed": 1 }
      }
    ]
  },
  {
    "id": 4,
    "name": "Rajesh Iyer",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Inventory Check",
        "description": "Verify stock levels in the warehouse.",
        "date": "2025-02-17",
        "category": "Logistics",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false,
        "taskCount": { "active": 1, "newtask": 0, "completed": 0, "failed": 0 }
      },
      {
        "title": "Supplier Meeting",
        "description": "Negotiate contracts with new suppliers.",
        "date": "2025-02-18",
        "category": "Supply Chain",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false,
        "taskCount": { "active": 1, "newtask": 0, "completed": 0, "failed": 0 }
      },
      {
        "title": "Budget Planning",
        "description": "Prepare next quarter’s budget proposal.",
        "date": "2025-02-19",
        "category": "Finance",
        "active": false,
        "newtask": false,
        "completed": false,
        "failed": true,
        "taskCount": { "active": 0, "newtask": 0, "completed": 0, "failed": 1 }
      },
      {
        "title": "Budget Planning",
        "description": "Prepare next quarter’s budget proposal.",
        "date": "2025-02-19",
        "category": "Finance",
        "active": false,
        "newtask": false,
        "completed": true,
        "failed": false,
        "taskCount": { "active": 0, "newtask": 0, "completed": 1, "failed": 0}
      },
    
    ]
  },
  {
    "id": 5,
    "name": "Simran Kaur",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Customer Support Training",
        "description": "Conduct a session on handling customer complaints.",
        "date": "2025-02-20",
        "category": "Customer Support",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false,
        "taskCount": { "active": 1, "newtask": 0, "completed": 0, "failed": 0 }
      },
      {
        "title": "Product Testing",
        "description": "Test the latest software update before release.",
        "date": "2025-02-21",
        "category": "Quality Assurance",
        "active": true,
        "newtask": false,
        "completed": true,
        "failed": false,
        "taskCount": { "active": 1, "newtask": 0, "completed": 1, "failed": 0 }
      },
      {
        "title": "Supplier Meeting",
        "description": "Negotiate contracts with new suppliers.",
        "date": "2025-02-18",
        "category": "Supply Chain",
        "active": false,
        "newtask": true,
        "completed": false,
        "failed": false,
        "taskCount": { "active": 0, "newtask": 1, "completed": 0, "failed": 0 }
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
     localStorage.setItem('admin',JSON.stringify(admin))
   }

   export const getLocalStorage =() =>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))

    return{employees,admin}
   }


  