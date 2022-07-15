export class Enum {
	static enumKeys = [];
	static enumValues = [];

	constructor(name, code) {
		this.name = name;
		this.code = code;
	}

	/**
	 * 内部方法
	 */
	static insideEnum() {
		const enumKeys = [];
		const enumValues = [];
		for (const [key, value] of Object.entries(this)) {
			enumKeys.push(key);
			value.enumKey = key;
			value.enumOrdinal = enumValues.length;
			enumValues.push(value);
		}
		this.enumKeys = enumKeys;
		this.enumValues = enumValues;
	}

	/**
	 * 获取枚举值
	 * @param str
	 * @returns {undefined|*}
	 */
	static enumValueOf(str) {
		const index = this.enumKeys.indexOf(str);
		if (index >= 0) {
			return this.enumValues[index];
		}
		return undefined;
	}

	/**
	 * 定义迭代器
	 * @returns {IterableIterator<*>}
	 */
	static [Symbol.iterator]() {
		return this.enumValues[Symbol.iterator]();
	}

	toString() {
		return this.constructor.name + "." + this.enumKey;
	}
}
//demo

export class Color extends Enum {
	static red = new Color("红色", "#f44336");
	// static orange = new Color();
	// static yellow = new Color();
	// static green = new Color();
	// static blue = new Color();
	// static purple = new Color();
	static _ = this.insideEnum(); // TypeScript: Color.closeEnum()
}
