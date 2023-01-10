import React, { useState } from "react";

function CoinReviewPage() {
  const [threads, setThreads] = useState([]); // Initialize an empty array of threads
  const [currentThread, setCurrentThread] = useState(null); // Initialize the current thread as null

  // Fetch the list of threads from the server and update the state
  const fetchThreads = async () => {
    const response = await fetch("/api/threads");
    const threads = await response.json();
    setThreads(threads);
  };

  // Function to handle creating a new thread
  const handleCreateThread = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/api/threads", {
      method: "POST",
      body: formData,
    });
    const newThread = await response.json();
    setThreads([...threads, newThread]);
  };

  // Function to handle deleting a thread
  const handleDeleteThread = async (threadId) => {
    await fetch(`/api/threads/${threadId}`, {
      method: "DELETE",
    });
    setThreads(threads.filter((thread) => thread.id !== threadId));
  };

  // Function to handle replying to a thread
  const handleReply = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch(`/api/threads/${currentThread.id}/replies`, {
      method: "POST",
      body: formData,
    });
    const updatedThread = await response.json();
    setCurrentThread(updatedThread);
  };

  // Render the list of threads
  const renderThreads = () => {
    return threads.map((thread) => (
      <li key={thread.id} onClick={() => setCurrentThread(thread)}>
        {thread.title}
      </li>
    ));
  };

  // Render the current thread
  const renderCurrentThread = () => {
    if (!currentThread) return;

    return (
      <div>
        <h1>{currentThread.title}</h1>
        <button onClick={() => handleDeleteThread(currentThread.id)}>
          Delete Thread
        </button>
        <p>{currentThread.content}</p>
        <form onSubmit={handleReply}>
          <input name="content" />
          <button type="submit">Submit Reply</button>
        </form>
        {currentThread.replies.map((reply) => (
          <p key={reply.id}>{reply.content}</p>
        ))}
      </div>
    );
  };

  return (
    <div>
      <ul>{renderThreads()}</ul>
      {renderCurrentThread()}
      <form onSubmit={handleCreateThread}>
        <input name="title" />
        <input name="content" />
        <button type="submit">Create Thread</button>
      </form>
    </div>
  );
}

export default CoinReviewPage;
