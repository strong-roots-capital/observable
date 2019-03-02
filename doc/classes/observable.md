[observable](../README.md) > [Observable](../classes/observable.md)

# Class: Observable

Encapsulates behavior for an entity capable of listening and reacting to an Event Source.

## Hierarchy

**Observable**

## Index

### Accessors

* [source](observable.md#source)

### Methods

* [handleEvent](observable.md#handleevent)

---

## Accessors

<a id="source"></a>

###  source

**set source**(source: *`EventSource`*): `void`

*Defined in [observable.ts:45](https://github.com/strong-roots-capital/observable/blob/89a8a67/src/observable.ts#L45)*

Observe a new EventSource.

*__remarks__*: Dispatches the old Observer. Thus, to stop observing any events set source to a new EventSource as follows

```ts
myObservable.source = new EventSource()
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| source | `EventSource` |  New EventSource to observe. |

**Returns:** `void`

___

## Methods

<a id="handleevent"></a>

###  handleEvent

▸ **handleEvent**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `void`

*Defined in [observable.ts:58](https://github.com/strong-roots-capital/observable/blob/89a8a67/src/observable.ts#L58)*

Event-handler to be invoked when observed EventSource emits an event. Override this function in a sub-class for custom behavior.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | `string` \| `symbol` |  Event emitted by observed EventSource |
| `Rest` args | `any`[] |  Arguments emitted by observed EventSource |

**Returns:** `void`

___

