select 
	h.houseId as id,
	h.address,
    json_object(
		'id', u.userId,
		'name', u.name,
		'surname', u.surname,
		'email', u.email,
		'mobile', u.mobile
	)  as owner, 
	json_object(
		'city', c.title,
		'country', cn.title
	) as location,
	json_arrayagg(i.src) as images
from house as h
join user as u
on h.userId = u.userId
join city as c
on h.cityId = c.cityId
join country as cn
on c.countryId = cn.countryId 
join house_image as hi
on h.houseId = hi.houseId
join image as i
on hi.imageId = i.imageId
group by h.houseId;

