select  	
	gm.game_id,
  gm.title,
  gm.price,
  gm.rating,
  pb.publisher,
  gmg.genres,
  gmp.platforms,
  gmi.images
from game as gm 
join publisher as pb 
on pb.publisher_id = gm.publisher_id
join (
  select 
    json_arrayagg(gr.genre) as genres,
    gm.game_id
  from game as gm
  join game_genre as gg
  on gm.game_id = gg.game_id
  join genre as gr
  on gg.genre_id = gr.genre_id
  group by gm.game_id
) as gmg
on gm.game_id = gmg.game_id
join (
  select
    json_arrayagg(pf.platform) as platforms,
    gm.game_id
  from game as gm
  join game_platform as gp
  on gm.game_id = gp.game_id
  join  platform as pf 
  on gp.platform_id = pf.platform_id 
  group by gm.game_id
) as gmp
on gm.game_id = gmp.game_id
join (
  select
    json_arrayagg(im.src) as images
    gm.game_id
    from game as gm
  join game_image as gi 
  on gm.game_id = gi.game_id 
  join image as im 
  on gi.image_id = im.image_id
  group by gm.game_id
) as gmi
on gm.game_id = gmi.game_id;