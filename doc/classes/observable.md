[observable](../README.md) > [Observable](../classes/observable.md)

# Class: Observable

DOCUMENT

## Hierarchy

**Observable**

## Index

### Accessors

* [source](observable.md#source)

### Methods

* [handleEvent](observable.md#handleevent)
* [observe](observable.md#observe)

---

## Accessors

<a id="source"></a>

###  source

**set source**(source: *`EventSource`*): `void`

*Defined in [observable.ts:49](https://github.com/strong-roots-capital/observable/blob/0546bb4/src/observable.ts#L49)*

DOCUMENT

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | `EventSource` |

**Returns:** `void`

___

## Methods

<a id="handleevent"></a>

###  handleEvent

▸ **handleEvent**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `void`

*Defined in [observable.ts:57](https://github.com/strong-roots-capital/observable/blob/0546bb4/src/observable.ts#L57)*

DOCUMENT

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `void`

___
<a id="observe"></a>

###  observe

▸ **observe**(ee: *`EventSource`*, callback: *`any`*): `Observer`

*Defined in [observable.ts:35](https://github.com/strong-roots-capital/observable/blob/0546bb4/src/observable.ts#L35)*

DOCUMENT

**Parameters:**

| Name | Type |
| ------ | ------ |
| ee | `EventSource` |
| callback | `any` |

**Returns:** `Observer`

___

