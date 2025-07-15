extends Node2D
class_name InteractManager

@onready var root = preload("res://Managers/Interact/interact_label.tscn")
@onready var descri = $desc
@export var texto_base:String = "[E] "

func _process(delta: float) -> void:
	pass

func _appears(interagir_desc: String):
	pass
