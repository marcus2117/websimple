import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold">Perfil do Usuário</h2>
      <p className="mt-2 text-gray-600">Visualizando dados do ID: <span className="font-bold">{id}</span></p>
    </div>
  );
};

export default UserProfile;
