import React from "react";

function AboutContext() {
  console.log("about Component");
  return (
    <>
      <hr />
      <h1>Context API</h1>
      <p>
        The Context API is a feature in React that provides a way to share state
        or data between components without the need for prop drilling.
      </p>
      <p>
        The Context API is a part of React that allows you to create a "context"
        for your application, which acts as a global store of data or state that
        can be accessed by any component within the context without the need to
        pass props down the component hierarchy manually. It's particularly
        useful when you have data or state that multiple components need to
        access or modify.
      </p>
      <h2>Steps</h2>
      <ol>
        <li>
          <b>Create a context createContext</b>
        </li>
        <dd>
          You can create a context using the createContext function, which
          returns an object with Provider and Consumer components.
        </dd>
        <li>Define your global State </li>
        <li>
          Provide the context value with the <strong>value</strong> Keyword
        </li>
        <li>Consume the context</li>
      </ol>
      <hr />
      <h1>Context API vs useContext hook</h1>
      <ol>
        <li>
          <strong> React Context API:</strong> <br />
          This is the broader concept that encompasses the entire system for
          sharing data across components in React. It includes the creation of
          contexts, the use of providers, and the consumption of values. The
          Context API provides the infrastructure for sharing data.
        </li>
        <li>
          <strong> useContext Hook:</strong> <br />
          This is a specific React hook that is used within functional
          components to consume the values provided by a context. It is a part
          of the React Hooks API and simplifies the process of accessing context
          values in functional components.
        </li>
        <p>
          In practice, you typically create a context using the Context API and
          then use the useContext hook within functional components to access
          and use the values from that context. So, while they are related
          concepts, they serve different roles in the same feature set for
          managing state and data sharing in React.
        </p>
      </ol>
      <hr />
      <h1>React.memo function</h1>
      <p>
        The React.memo function in React works by memoizing a functional
        component, which means it caches the rendered output of the component
        and prevents it from re-rendering if the component's props have not
        changed. This behavior helps optimize performance by avoiding
        unnecessary re-renders of components when their input data hasn't
        changed.
      </p>
      <hr />
    </>
  );
}
export default React.memo(AboutContext);
