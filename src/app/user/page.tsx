import Image from "next/image";

const user = {
  name: 'Rheno Rayhan Fayyaz Dhana Pramudya',
  nim: '2141720157',
  imageUrl: 'https://media.licdn.com/dms/image/D4E03AQGRwbDIB6sySg/profile-displayphoto-shrink_800_800/0/1708994700526?e=1715212800&v=beta&t=SVT05A-wR6d-1UFEiO2BojKWJcZMxWZ5Z5TsgnUwaJI',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.nim}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
    )    
}
