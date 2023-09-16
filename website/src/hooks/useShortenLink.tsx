import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs, Link } from '@/utils/types';

const useShortenLink = () => {
  const [linksData, setLinksData] = useState<Link[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (form) => {
    setApiError('');
    setIsLoading(true);
    try {
      const data = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${form.url}`
      ).then((res) => res.json());

      if (!data.ok) {
        if (data.error_code == 2) {
          setApiError('Please add a link');
        } else {
          setApiError(data.error);
        }
      }

      if (data.ok) {
        setLinksData([
          {
            originalLink: data.result.original_link,
            shortLink: data.result.short_link,
            copied: false,
          },
          ...linksData,
        ]);
      }
    } catch (error: any) {
      setApiError('Something went wrong, try again later...');
      console.log(error);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  const copyToClipboard = (copiedLink: string) => {
    const links = linksData.map((link) => {
      if (link.shortLink === copiedLink) {
        link.copied = true;
      } else {
        link.copied = false;
      }
      return link;
    });
    setLinksData(links);
  };

  return {
    linksData,
    isLoading,
    apiError,
    register,
    handleSubmit,
    errors,
    onSubmit,
    copyToClipboard,
  };
};

export default useShortenLink;
