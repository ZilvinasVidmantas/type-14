insert into image (src) VALUE ('https://i.redd.it/077hr5tkhei61.jpg');

insert into user (email, password, name, surname, mobile, imageId) VALUE 
('user3@gmail.com', 'Vilnius123!', 'Serbentautas', 'Bordiūras', '+387 542 96875', last_insert_id());