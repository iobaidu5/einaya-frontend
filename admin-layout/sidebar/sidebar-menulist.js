
export const menuList = [
  {
    title: "Users",
    icon: "Home",
    url: "/admin/users",
    subMenu: [
      {
        title: "All Users",
        url: "/admin/users",
      },
      // {
      //   title: "Pending Doctors",
      //   url: "/admin/pending-doctors",
      // },
    ],
  },
  {
    title: "Doctor",
    icon: "ReceiptLong",
    url: "/admin/doctors",
    subMenu: [
      {
        title: "All Doctors",
        url: "/admin/doctors",
      },
      {
        title: "Pending Doctors",
        url: "/admin/pending-doctors",
      },
    ],
  },
  {
    title: "Insurances",
    icon: "ReceiptLong",
    url: "/admin/insurances",
    subMenu: [
      {
        title: "All Insurances",
        url: "/admin/insurances",
      },
      {
        title: "Pending Insurances",
        url: "/admin/pending-insurances",
      },
    ],
  },
  {
    title: "Business Accounts",
    icon: "ReceiptLong",
    url: "/admin/business",
    subMenu: [
      {
        title: "All Business Accounts",
        url: "/admin/business",
      },
      {
        title: "Pending Accounts",
        url: "/admin/pending-business",
      },
    ],
  },

];

export const doctorMenuList = [
    {
      title: "Appointments",
      icon: "Home",
      url: "/doctor/users",
      subMenu: [
        {
          title: "All Appointments",
          url: "/doctor/appointments",
        },
        {
          title: "Pending Appointments",
          url: "/doctor/pending-appointments",
        },
      ],
    },
]
