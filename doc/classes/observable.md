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
* [observe](observable.md#observe)

---

## Accessors

<a id="source"></a>

###  source

**set source**(source: *`EventSource`*): `void`

*Defined in [observable.ts:72](https://github.com/strong-roots-capital/observable/blob/319e4fb/src/observable.ts#L72)*

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

*Defined in [observable.ts:85](https://github.com/strong-roots-capital/observable/blob/319e4fb/src/observable.ts#L85)*

Event-handler to be invoked when observed EventSource emits an event. Override this function in a sub-class for custom behavior.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | `string` \| `symbol` |  Event emitted by observed EventSource |
| `Rest` args | `any`[] |  Arguments emitted by observed EventSource |

**Returns:** `void`

___
<a id="observe"></a>

###  observe

▸ **observe**(eventSource: *`EventSource`*, callback: *`any`*): `Observer`

*Defined in [observable.ts:48](https://github.com/strong-roots-capital/observable/blob/319e4fb/src/observable.ts#L48)*

Observe specified EventSource.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| eventSource | `EventSource` |  EventSource to observe |
| callback | `any` |  Callback to invoke on event from \`eventSource\` |

**Returns:** `Observer`
Observer of `eventSource`

___

