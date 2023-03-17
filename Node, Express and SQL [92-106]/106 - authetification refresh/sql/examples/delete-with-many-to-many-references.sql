DELETE from user_house_rating
WHERE houseId = 3;

DELETE from user_liked_house
WHERE houseId = 3;

SET @houseImagesIds = (
	select group_concat(imageId) 
    from house_image 
    where houseId = 3
    group by houseId);  

DELETE from house_image
WHERE houseId = 3;

DELETE from image
WHERE find_in_set(imageId, @houseImagesIds);

DELETE from house
WHERE houseId = 3;