extends Node2D
class_name InteractManager

@onready var label = $Label
@export var texto_base:String = "[E] "
func _process(delta: float) -> void:
	
	pass

func _appears(interagir_desc: String):
	label.text = texto_base
	pass
