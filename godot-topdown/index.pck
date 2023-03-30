GDPC                                                                                           P   res://.godot/exported/133200997/export-178df499c26bcd3357cc4c21fb1eaa2e-main.scn�      l      ��B�ڜ�מ��&OE    T   res://.godot/exported/133200997/export-437cb14951af184369540b14fe3fe0fe-player.scn  `       ~      ܳ˝��C,r,�M��~    X   res://.godot/exported/133200997/export-6b09c021962de2552cee9918131cca52-health_bar.scn  �      #      �#+|�����^ax��    ,   res://.godot/global_script_class_cache.cfg                 ��Р�8���8~$}P�    H   res://.godot/imported/border.png-2a8b638454127f23ca0d5690c086cda2.ctex  �      ^       X^��፽s�e:�|��    D   res://.godot/imported/fill.png-dd1fef70684eed2e5a6e84d56c681296.ctexP      ^       ��>$)�i�����)�       res://.godot/uid_cache.bin  p      �       ����FKEAu��ނ       res://game/main.gd  �      �       ,G }�5G���utr       res://game/main.tscn.remap         a       j>�v}��nJ;��A�    $   res://game/scenes/player/player.gd          @       �52��Q�F�	��    ,   res://game/scenes/player/player.tscn.remap         c       l������zI΄�\�    0   res://game/scenes/resource_bar/border.png.import@      	       ���y왽ԗ�pl�:�    0   res://game/scenes/resource_bar/fill.png.import  �            ��5i�����uӪ@��    ,   res://game/scenes/resource_bar/health_bar.gd�	      �      �~)^��+OO�1p�    4   res://game/scenes/resource_bar/health_bar.tscn.remap�      g       y3"V0S?YW�D��       res://project.binaryp      �      }SAI"����s�    ��q,��Glist=Array[Dictionary]([])
*�|extends Node

func _ready():
	pass

func _process(delta):
	pass
RSRC                     PackedScene            ��������                                                  resource_local_to_scene    resource_name 	   _bundled    script       Script #   res://game/scenes/player/player.gd ��������      local://PackedScene_88n8c          PackedScene          	         names "         Player    script    Node2D    	   variants                       node_count             nodes     	   ��������       ����                    conn_count              conns               node_paths              editable_instances              version             RSRC2�GST2            ����                        &   RIFF   WEBPVP8L   /� ���� �[remap]

importer="texture"
type="CompressedTexture2D"
uid="uid://dutdb7g7wt4nk"
path="res://.godot/imported/border.png-2a8b638454127f23ca0d5690c086cda2.ctex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://game/scenes/resource_bar/border.png"
dest_files=["res://.godot/imported/border.png-2a8b638454127f23ca0d5690c086cda2.ctex"]

[params]

compress/mode=0
compress/high_quality=false
compress/lossy_quality=0.7
compress/hdr_compression=1
compress/normal_map=0
compress/channel_pack=0
mipmaps/generate=false
mipmaps/limit=-1
roughness/mode=0
roughness/src_normal=""
process/fix_alpha_border=true
process/premult_alpha=false
process/normal_map_invert_y=false
process/hdr_as_srgb=false
process/hdr_clamp_exposure=false
process/size_limit=0
detect_3d/compress_to=0
/���LGST2            ����                        &   RIFF   WEBPVP8L   /�  ���������  ��[remap]

importer="texture"
type="CompressedTexture2D"
uid="uid://d2qt30266cuc7"
path="res://.godot/imported/fill.png-dd1fef70684eed2e5a6e84d56c681296.ctex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://game/scenes/resource_bar/fill.png"
dest_files=["res://.godot/imported/fill.png-dd1fef70684eed2e5a6e84d56c681296.ctex"]

[params]

compress/mode=0
compress/high_quality=false
compress/lossy_quality=0.7
compress/hdr_compression=1
compress/normal_map=0
compress/channel_pack=0
mipmaps/generate=false
mipmaps/limit=-1
roughness/mode=0
roughness/src_normal=""
process/fix_alpha_border=true
process/premult_alpha=false
process/normal_map_invert_y=false
process/hdr_as_srgb=false
process/hdr_clamp_exposure=false
process/size_limit=0
detect_3d/compress_to=0
�Jl�p��5n�extends Control

@export var health_color_healthy: Color
@export_range(0, 100) var health_value_caution: int
@export var health_color_caution: Color
@export_range(0, 100) var health_value_critical: int
@export var health_color_critical: Color

@onready var health_over_progress = $TextureProgressBar_Top
@onready var health_under_progress = $TextureProgressBar_Bottom

func _ready():
	health_under_progress.value = 100
	health_over_progress.value = 100

func _process(delta):
	pass

func update_healthbar_percent(val: int):
	health_over_progress.value = clamp(val, 0, 100)
	get_tree().create_tween().tween_property(health_under_progress, "value", health_over_progress.value, 0.3).set_trans(Tween.TRANS_LINEAR)
	if health_over_progress.value < health_value_critical:
		health_over_progress.tint_progress = health_color_critical
	elif health_over_progress.value < health_value_caution:
		health_over_progress.tint_progress = health_color_caution
	else:
		health_over_progress.tint_progress = health_color_healthy

func update_healthbar_size(val: Vector2):
	health_over_progress.size = val
	health_under_progress.size = val

func update_healthbar_global_position(val: Vector2):
	self.set_global_position(val)v.r���E���RSRC                     PackedScene            ��������                                                  resource_local_to_scene    resource_name 	   _bundled    script       Script -   res://game/scenes/resource_bar/health_bar.gd ��������
   Texture2D (   res://game/scenes/resource_bar/fill.png �����-!~
   Texture2D *   res://game/scenes/resource_bar/border.png �kءbw      local://PackedScene_2tg3f �         PackedScene          	         names "   "      Health Bar    layout_mode    anchors_preset    anchor_left    anchor_top    anchor_right    anchor_bottom    offset_left    offset_top    offset_right    offset_bottom    grow_horizontal    grow_vertical    script    health_color_healthy    health_value_caution    health_color_caution    health_value_critical    health_color_critical    Control    TextureProgressBar_Bottom    value    nine_patch_stretch    stretch_margin_left    stretch_margin_top    stretch_margin_right    stretch_margin_bottom    texture_under    texture_over    texture_progress    tint_under    tint_progress    TextureProgressBar    TextureProgressBar_Top    	   variants                         ?     �     ��                         �?      �?           �?  �?      �?           �?          �?            `C     �A     �B                           ��k>��k>��k>  �?   ��;?          �?     HB             ��=?      �?      node_count             nodes     m   ��������       ����                                                    	      
                                       	      
                            ����         	      
                                                                                        !   ����         	      
                                                                      conn_count              conns               node_paths              editable_instances              version             RSRC�oͮ�[{��n_�extends Node

@onready var health_bar = $"Health Bar"

func _ready():
	health_bar.update_healthbar_global_position(Vector2(50, 50))
	health_bar.update_healthbar_size(Vector2(400,40))
	health_bar.update_healthbar_percent(50)
	
func _process(delta):
	pass
�`RSRC                     PackedScene            ��������                                                  resource_local_to_scene    resource_name 	   _bundled    script       Script    res://game/main.gd ��������      local://PackedScene_m0r11 
         PackedScene          	         names "         Main    script    Node2D    	   variants                       node_count             nodes     	   ��������       ����                    conn_count              conns               node_paths              editable_instances              version             RSRC���,[remap]

path="res://.godot/exported/133200997/export-437cb14951af184369540b14fe3fe0fe-player.scn"
��[�cqb?��u[remap]

path="res://.godot/exported/133200997/export-6b09c021962de2552cee9918131cca52-health_bar.scn"
����\�K�[remap]

path="res://.godot/exported/133200997/export-178df499c26bcd3357cc4c21fb1eaa2e-main.scn"
���qd��	��+��Q   �P�u�$   res://game/scenes/player/player.tscn�kءbw)   res://game/scenes/resource_bar/border.png�����-!~'   res://game/scenes/resource_bar/fill.pngJTS���p.   res://game/scenes/resource_bar/health_bar.tscn��|��=   res://game/main.tscn�h��9u/ECFG      application/config/name         New Game Project   application/run/main_scene         res://game/main.tscn   application/config/features$   "         4.0    Forward Plus       application/config/icon         res://icon.svg     importer_defaults/texture�              compress/channel_pack                compress/hdr_compression            compress/high_quality                compress/lossy_quality    ffffff�?      compress/mode                compress/normal_map              detect_3d/compress_to                mipmaps/generate             mipmaps/limit      ����      process/fix_alpha_border            process/hdr_as_srgb              process/hdr_clamp_exposure               process/normal_map_invert_y              process/premult_alpha                process/size_limit               roughness/mode               roughness/src_normal       9   rendering/textures/canvas_textures/default_texture_filter          ��`U|7�phuQX;