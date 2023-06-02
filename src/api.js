import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB();

export const fetchLessonData = async () => {
  const params = {
    TableName: 'kris_eng_lessons',
    Key: { id: { S: '1' } }, // Укажите соответствующие имя таблицы и ключ
  };

  try {
    const data = await dynamodb.getItem(params).promise();
    const { new_list, word_list } = data.Item;
    const parsedNewList = JSON.parse(new_list.S);
    const parsedWordList = JSON.parse(word_list.S);

    return { newList: parsedNewList, wordList: parsedWordList };
  } catch (error) {
    console.error('Ошибка при получении данных из DynamoDB:', error);
    return { newList: [], wordList: [] };
  }
};
