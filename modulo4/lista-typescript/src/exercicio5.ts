// Exercicio5

type profile = {
  name: string;
  email: string;
  role: string;
};

const arrayUsers: profile[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

function emailsAdmin (array: profile[]) : string[] {
    return array.filter((p)=>{
        return p.role === "admin";
    }).map((e)=>{
        return e.email
    })
}

console.log(emailsAdmin(arrayUsers))
