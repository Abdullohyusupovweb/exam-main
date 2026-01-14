import { Center, List } from "rsuite";

const assignments = [
  {
    id: 1,
    text: "Mahsulot qo'shish bo'limida form yaratilsin va ushbu form orqali yangi mahsulot qo'shish mumkin bo'lsin.",
  },
  {
    id: 2,
    text: `Har bir mahsulotning id, title, description, price hossalari bo'lishi kerak.`,
  },
  {
    id: 3,
    text: `Qo'shilgan mahsulot "Redux-toolkit" yoki "Context-api" yoki "Zustand" lardan biriga saqlansin va localstorage'ga ham saqlansin`,
  },
  {
    id: 4,
    text: `Barcha yaratilgan mahsulotlar "Mahsulotlar bo'limiga chiroyli tarzda chiqarilsin"`,
  },
];

function Dashboard() {
  return (
    <Center w={"100%"} h={"100%"}>
      <List bordered>
        {assignments.map((a) => {
          return (
            <List.Item key={a.id} fontSize={16}>
              {a.id} - {a.text}
            </List.Item>
          );
        })}
      </List>
    </Center>
  );
}

export default Dashboard;
