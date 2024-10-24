interface UserNameProps {
  label: string;
}

const UserName = ({ label }: UserNameProps) => {
  return <p className="text-lg font-semibold">{label}</p>;
};

export default UserName;
