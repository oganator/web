use std::fmt::Result;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: f64, b: f64) -> String{
	match add_item("test", &(a + b).to_string()){
		Ok(_) => return "Done".to_string(),
		Err(e) => return e.to_string()
	};
}

pub fn add_item(key: &str, value: &str) -> Result{
	let window = web_sys::window().unwrap();
	let local_storage = window.local_storage().unwrap().unwrap();

	let list = match local_storage.get_item(key) {
		Ok(Some(items)) => items,
		Ok(None) => String::from("[]"),
    Err(_) => todo!(),
	};

	let mut items: Vec<String> = serde_json::from_str(&list).unwrap();
	items.push(String::from(value));

	let new_list = serde_json::to_string(&items).unwrap();
	local_storage.set_item(key, &new_list).unwrap();
	Ok(())
}

pub fn get_items() -> Vec<String> {
	let window = web_sys::window().unwrap();
	let local_storage = window.local_storage().unwrap().unwrap();

	let list = match local_storage.get_item("list") {
		Ok(Some(items)) => items,
		Ok(None) => String::from("[]"),
		Err(_) => todo!(),
	};

	serde_json::from_str(&list).unwrap()
}
