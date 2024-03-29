insert into country(title) values
('Poland'),
('Latvija'),
('Lietuva'),
('Austrija'),
('Italija'),
('Rumunija'),
('Šveicarija');

insert into city(countryId, title) values
(1, 'Wychodne'),
(2, 'Sēja'),
(2, 'Skrīveri'),
(3, 'Paplatelės'),
(2, 'Ķeipene'),
(2, 'MALPILS NOVADS'),
(2, 'Skujene'),
(3, 'Plateliai'),
(4, 'Ellmau'),
(5, 'Brescia'),
(6, 'Brașov County'),
(7, 'Wallis');

insert into image(src) values
('https://cdn.geekwire.com/wp-content/uploads/2015/03/Nick_Berry-300x300.jpg'),
('https://pearnkandola.com/app/uploads/2018/09/James-Hatcher-300x300.png'),
('https://architecture.ou.edu/wp-content/uploads/2018/07/ANGELAPERSON-1447-300x300.jpg');

insert into user(email, password, name, surname, mobile, imageId, role) values
('admin@gmail.com', '$2b$10$/oolJQxqMnjLmsB8iaaBguk67FPht.zUAXTb2A1zRTF70mv8WmzG6', 'Bangimantas', 'Ūsas', '+370 68957488', 1, 'ADMIN'),
('user1@gmail.com', '$2b$10$/oolJQxqMnjLmsB8iaaBguk67FPht.zUAXTb2A1zRTF70mv8WmzG6', 'Serbentautas', 'Bordiūras', '+372 546 58745', 2, 'USER'),
('user2@gmail.com', '$2b$10$/oolJQxqMnjLmsB8iaaBguk67FPht.zUAXTb2A1zRTF70mv8WmzG6', 'Juria', 'Valenta', '+475 622 48799', 3, 'USER');

insert into house(userId, cityId, address, price, title) values
(2, 1, 'address 1', 32, 'Domek na drzewie wśród zwierząt'),
(3, 2, 'address 2', 137, 'Trobelė'),
(2, 3, 'address 3', 66, 'Gražus kaimiškas medinis rąstų namas Skriveri'),
(3, 4, 'address 4', 92, 'Virš Ąžuolų - Forest SPA'),
(2, 5, 'address 5', 94, 'Ezernams'),
(3, 6, 'address 6', 135, 'Jaukus namelis miške'),
(2, 7, 'address 7', 60, 'Atostogų namai Elkos kalne'),
(2, 8, 'address 8', 90, 'Sodyba BIČIULIŲ NAMAI'),
(2, 9, 'address 9', 464, 'Unikalus poilsio namelis Elmau centre, 100 m nuo trobelės'),
(3, 10, 'address j', 144, 'Gamtos rezidencija - Bondo slėnio gamtinis rezervatas'),
(2, 11, 'address a', 70, 'Dangaus detalė, ramybė, gamta ir atsipalaidavimas'),
(3, 12, 'address 1', 180, 'Alpių namelis su vaizdu į Aukštutinį Valė slėnį');

insert into image(src) values
('https://a0.muscache.com/im/pictures/3a5a705d-af79-4ae3-8997-de37198b014b.jpg?im_w=1200'),
('https://a0.muscache.com/im/pictures/de62f2d3-5901-46b6-8e51-ba39a0582122.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/8920865b-d2e0-4157-91e1-ba5081705d3f.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/8dec2f7c-1c3e-402e-baea-4fd72af59621.jpg?im_w=1200'),
('https://a0.muscache.com/im/pictures/1c1c4008-d617-4e9f-b5e3-aa38bc8c5c9a.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/miso/Hosting-43105686/original/b87b8ba8-d3d8-4567-8aa0-ce2a8e8a0dea.jpeg?im_w=1440'),
('https://a0.muscache.com/im/pictures/miso/Hosting-38998240/original/f48a24c7-53d5-4e65-a041-08f1742096d0.jpeg?im_w=1200'),
('https://a0.muscache.com/im/pictures/fd94effa-da96-4b2d-97ee-39bab24ad470.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/14cf87f4-cb04-49a1-b733-a43edfcff1c7.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/miso/Hosting-49434096/original/3fcc350c-ac5f-4464-b757-4f43ef33c89f.jpeg?im_w=1200'),
('https://a0.muscache.com/im/pictures/miso/Hosting-49434096/original/97836fa1-c200-4899-a9d8-a1d1b013f15c.jpeg?im_w=1440'),
('https://a0.muscache.com/im/pictures/miso/Hosting-49434096/original/551bca7c-e035-45a7-98fe-a09108083c93.jpeg?im_w=1440'),
('https://a0.muscache.com/im/pictures/miso/Hosting-37926580/original/eb219019-41e1-4d99-a499-994b082b887c.jpeg?im_w=1200'),
('https://a0.muscache.com/im/pictures/miso/Hosting-37926580/original/f323a639-bc6b-43fd-b479-668926601a68.jpeg?im_w=1440'),
('https://a0.muscache.com/im/pictures/miso/Hosting-37926580/original/62837d3d-cbe2-4036-97ee-18797dcef56b.jpeg?im_w=1440'),
('https://a0.muscache.com/im/pictures/miso/Hosting-5723372/original/87eeb90f-2545-419e-b9a6-03c70db417e5.jpeg?im_w=1200'),
('https://a0.muscache.com/im/pictures/0573a97a-32be-429d-805c-768c39f76be6.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/0b18e267-3109-4027-a60e-10816bf2fbc9.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/c796ef33-b2c9-4a0a-8238-26617f3a9bdb.jpg?im_w=1200'),
('https://a0.muscache.com/im/pictures/bdf48b9a-6112-4c6d-a874-1514a79d3a60.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/miso/Hosting-43620298/original/2f3f0463-9ef7-4ee7-a1f7-898ac3325d5e.jpeg?im_w=1440'),
('https://a0.muscache.com/im/pictures/7fb0c126-5c51-4d3e-b283-382fafe3329a.jpg?im_w=1200'),
('https://a0.muscache.com/im/pictures/miso/Hosting-44229733/original/4f172d56-b97e-4eab-ac26-23a2a3111c60.jpeg?im_w=1440'),
('https://a0.muscache.com/im/pictures/miso/Hosting-44229733/original/94042e24-8afa-45e9-8c87-7d9155244dfb.jpeg?im_w=1440'),
('https://a0.muscache.com/im/pictures/e8b6e3c2-df2e-4b9c-913c-c21c83b10426.jpg?im_w=1200'),
('https://a0.muscache.com/im/pictures/3dee0a89-0336-42a0-ac91-03d3861143fa.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/27b7bb4e-fda9-4e5f-840a-04ffb0922993.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/e69b3403-3d09-4f3f-b997-1a21164d1ee7.jpg?im_w=1200'),
('https://a0.muscache.com/im/pictures/0abf4095-ef69-4afb-bef6-820e59d23990.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/07b54251-f9b5-490e-8d0e-85afa65b161c.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/miso/Hosting-37805118/original/58212748-d05c-46c4-9c93-5194e4c6bfb4.jpeg?im_w=1200'),
('https://a0.muscache.com/im/pictures/miso/Hosting-37805118/original/05cf0d6f-4608-48c2-8ae0-3fb767ef7380.jpeg?im_w=1440'),
('https://a0.muscache.com/im/pictures/miso/Hosting-37805118/original/a9274c1e-7221-4747-9d26-81a490ebed92.jpeg?im_w=1440'),
('https://a0.muscache.com/im/pictures/1c1f6334-dfca-4e34-a963-47ec1bbdcf74.jpg?im_w=1200'),
('https://a0.muscache.com/im/pictures/1d593a62-5dc3-413b-b27d-45bd682b8efa.jpg?im_w=1440'),
('https://a0.muscache.com/im/pictures/6d77e529-40b5-4dce-bfee-8fcf984bb895.jpg?im_w=1440');

insert into house_image(houseId, imageId) values
(1, 4),
(1, 5),
(1, 6),
(2, 7),
(2, 8),
(2, 9),
(3, 10),
(3, 11),
(3, 12),
(4, 13),
(4, 14),
(4, 15),
(5, 16),
(5, 17),
(5, 18),
(6, 19),
(6, 20),
(6, 21),
(7, 22),
(7, 23),
(7, 24),
(8, 25),
(8, 26),
(8, 27),
(9, 28),
(9, 29),
(9, 30),
(10, 31),
(10, 32),
(10, 33),
(11, 34),
(11, 35),
(11, 36),
(12, 37),
(12, 38),
(12, 39);