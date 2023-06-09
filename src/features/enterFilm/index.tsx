import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Flex, Button, Center, TextInputProps } from '@mantine/core';

export const EnterFilm = () => {
	const [filmId, setFilmId] = useState('');
	const navigate = useNavigate();

	const onChange: TextInputProps['onChange'] = event => {
		setFilmId(event.currentTarget.value);
	};

	const onOpen = () => {
		navigate(`/${filmId}`);
	};

	return (
		<Center h="100%" w="100%">
			<Flex h="100%" align="center" justify="center" direction="column" gap="sm">
				<TextInput w="300px" value={filmId} onChange={onChange} label="Введите id фильма" />

				<Button
					onClick={onOpen}
					fullWidth
					variant="gradient"
					gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
					Открыть
				</Button>
			</Flex>
		</Center>
	);
};
