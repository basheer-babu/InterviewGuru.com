const handleSave = () => {
  if (userName.length === 0 || companyName.length === 0) {
    setError('Please fill in all details');
    setOpen(true);
    return;
  }

  setUserName('');
  setCompanyName('');
  setAllQuestions([]);

  const body = {
    userName: userName,
    companyName: companyName,
    questions: allQuestions.join(','),
  };

  AddQuestionService(body)
    .then((response) => {
      if (response.ok) {
        setSave('Saved Successfully');
        setOpen(false);
      } else {
        console.log("else")
        throw new Error('Failed to save');
      }
    })
    .catch((err) => {
      console.log('catch')
      setError(`Error: ${err.message}`);
      setOpen(true);
    });
};
