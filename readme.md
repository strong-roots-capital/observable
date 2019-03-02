# Observable [![Build status](https://travis-ci.org/strong-roots-capital/observable.svg?branch=master)](https://travis-ci.org/strong-roots-capital/observable) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/observable.svg)](https://npmjs.org/package/@strong-roots-capital/observable) [![codecov](https://codecov.io/gh/strong-roots-capital/observable/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/observable)

> Capable of observing and reacting to EventSources

## Install

``` shell
npm install @strong-roots-capital/observable
```

## Use

``` typescript
import Observable from '@strong-roots-capital/observable'
import { EventSource } from '@strong-roots-capital/event-source'

class MyObservable extends Observable {
    handleEvent(event: string | symbol, ...args: any[]) {
        console.log(`In handleEvent with event '${event}' and arguments ${args}`)
    }
}

const es = new EventSource()
const myobservable = new MyObservable()
myobservable.source = es

es.emit('some-event', 1, 2, 3)
//=> In handleEvent with event 'some-event' and arguments [1, 2, 3]
```

## Related

- [event-source](https://github.com/strong-roots-capital/event-source)
- [observe](https://github.com/strong-roots-capital/observe)

## Acknowledgments

- [Deprecating the Observer Pattern with Scala.React](https://infoscience.epfl.ch/record/176887/files/DeprecatingObservers2012.pdf)
