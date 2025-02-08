

const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "employee1@example.com",
    password: "123",
    taskCount: { active: 2, newtask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Financial Report",
        description: "Preparing the Q1 financial report.",
        date: "2025-02-10",
        category: "Finance",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team Strategy Meeting",
        description: "Discuss upcoming product launch strategy.",
        date: "2025-02-12",
        category: "Meetings",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "New Vendor Research",
        description: "Identify new potential suppliers.",
        date: "2025-02-14",
        category: "Procurement",
        active: false,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Proposal",
        description: "Sent the project proposal to the client.",
        date: "2025-02-15",
        category: "Sales",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    name: "Ishaan Verma",
    email: "employee2@example.com",
    password: "123",
    taskCount: { active: 1, newtask: 1, completed: 0, failed: 2 },
    tasks: [
      {
        title: "Customer Feedback Review",
        description: "Analyzing feedback from recent product launch.",
        date: "2025-02-16",
        category: "Customer Relations",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Security Patch Update",
        description: "Reviewing and applying security updates.",
        date: "2025-02-17",
        category: "IT Security",
        active: false,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Ad Campaign Setup",
        description: "Failed to meet the advertising campaign budget.",
        date: "2025-02-18",
        category: "Marketing",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      },
      {
        title: "Bug Fix Deployment",
        description: "Patch update caused system crashes.",
        date: "2025-02-19",
        category: "Development",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    name: "Neha Kapoor",
    email: "employee3@example.com",
    password: "123",
    taskCount: { active: 0, newtask: 1, completed: 2, failed: 1 },
    tasks: [
      {
        title: "Website Redesign",
        description: "Gathering new UI/UX feedback for improvements.",
        date: "2025-02-20",
        category: "Web Development",
        active: false,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO Analysis",
        description: "SEO rankings improved based on new keywords.",
        date: "2025-02-21",
        category: "SEO",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social Media Strategy",
        description: "Successfully launched a new campaign.",
        date: "2025-02-22",
        category: "Marketing",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "Product Testing",
        description: "Testing phase failed due to software bugs.",
        date: "2025-02-23",
        category: "Quality Assurance",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    name: "Rajesh Iyer",
    email: "employee4@example.com",
    password: "123",
    taskCount: { active: 2, newtask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Inventory Audit",
        description: "Conducting a full warehouse stock audit.",
        date: "2025-02-24",
        category: "Logistics",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Supplier Contract Negotiation",
        description: "Negotiating new supplier terms.",
        date: "2025-02-25",
        category: "Procurement",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Quarterly Budget Proposal",
        description: "Successfully submitted and approved.",
        date: "2025-02-26",
        category: "Finance",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "New Equipment Purchase",
        description: "Purchase request denied due to budget constraints.",
        date: "2025-02-27",
        category: "Operations",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    name: "Simran Kaur",
    email: "employee5@example.com",
    password: "123",
    taskCount: { active: 1, newtask: 2, completed: 0, failed: 1 },
    tasks: [
      {
        title: "Customer Support Training",
        description: "Conducting training for new support agents.",
        date: "2025-02-28",
        category: "Customer Support",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Product Quality Testing",
        description: "Testing the latest software update before release.",
        date: "2025-03-01",
        category: "Quality Assurance",
        active: false,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Supplier Meeting",
        description: "Discussing new contract agreements.",
        date: "2025-03-02",
        category: "Supply Chain",
        active: false,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Website Migration",
        description: "Server migration failed due to data corruption.",
        date: "2025-03-03",
        category: "IT Infrastructure",
        active: false,
        newtask: false,
        completed: false,
        failed: true
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


  